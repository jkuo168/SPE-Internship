const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt')
const PORT = process.env.PORT || 4001;

let Application = require('./models/application');

// connect to mongoose
const db = require('./config/keys').MongoURI;
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected...")
})

// use cors
app.use(cors());

// use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// express routes
// returns all applications
router.route('/').get((req, res) => {
  Application.find((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.json(post);
    }
  });
})

// returns individual application
router.route('/:netid').get((req, res) => {
  let netid = req.params.netid
  Application.findOne({ netid }, (err, application) => {
    if (!application) {
      res.status(404).send('Data is not found');
    } else {
      res.json(application);
    }
  })
})

// finds one application with same groupid, excludes user
router.route('/group/:groupid/:netid').get((req, res) => {
  let groupid = req.params.groupid;
  let netid = req.params.netid;
  Application.findOne({ group: groupid, netid: {$ne: netid }}, (err, application) => {
    if (!application) {
      res.status(404).send('Data is not found');
    } else {
      res.json(application)
    }
  })
})

// finds all application with same groupid, excluding the user
router.route('/group/all/:groupid/:netid').get((req, res) => {
  let groupid = req.params.groupid;
  let netid = req.params.netid;
  Application.find({ group: groupid, netid: {$ne: netid}}, (err, application) => {
    if (!application) {
      res.status(404).send('Data is not found');
    } else {
      res.json(application)
    }
  })
})

// returns first and last name of people in a group
router.route('/group/netid/:groupid/:netid').get((req, res) => {
  let groupid = req.params.groupid;
  let netid = req.params.netid;
  Application.find({ group: groupid, netid:{$ne: netid} }, {first:1, last:1, _id:0}, (err, application) => {
    if (!application) {
      res.status(404).send('Data is not found');
    } else {
      res.json(application)
    }
  })
})

// returns application of student by first name
router.route('/name/:first/:last').get((req, res) => {
  let first = req.params.first;
  let last = req.params.last;
  Application.findOne({ first: first, last: last}, (err, application) => {
    if (!application) {
      res.status(404).send('Data is not found');
    } else {
      res.json(application)
    }
  })
})

// delete group id number from user's application
router.route('/delete/group/:netid').post((req, res) => {
  let netid = req.params.netid
  Application.findOne({ netid })
    .then(application => {
      application.group = [];

      application.save()
        .then(() => res.json('Group updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

// update new application by netid
router.route('/update/:netid').post((req, res) => {
  let netid = req.params.netid
  Application.findOne({ netid }, (err, application) => {
    if (!application) {
      res.status(404).send('Data is not found');
    } else {

      application.group = req.body.group;
      application.draw = req.body.draw;
      application.meal = req.body.meal;

      application.save().then(posts => {
        res.json('Application updated');
      })
      .catch(err => {
        res.status(400).send("update not possible");
      });
    }
  })
})

// update application that has already been added to a group
router.route('/update/group/:netid').post((req, res) => {
  let netid = req.params.netid
  Application.findOne({ netid }, (err, application) => {
    if (!application) {
      res.status(404).send('Data is not found');
    } else {
      application.draw = req.body.draw;
      application.meal = req.body.meal;

      application.save().then(posts => {
        res.json('Application updated');
      })
      .catch(err => {
        res.status(400).send("update not possible");
      })
    }
  })
})

// update groupid of people in a group
router.route('/update/groupid/:netid').post((req, res) => {
  let netid = req.params.netid
  Application.findOne({ netid }, (err, application) => {
    if (!application) {
      res.status(404).send('Data is not found');
    } else {
      application.group = req.body.group;

      application.save().then(posts => {
        res.json('Application updated');
      })
      .catch(err => {
        res.status(400).send("update not possible");
      })
    }
  })
})

// express Router
app.use('/applications', router);

// Set up port
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}!`);
});
