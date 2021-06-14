const express = require('express'),
      app = express(),
      logreg = require('../models/schema');
    
app.post('/user', async (req, res) => {
    try {
        const user = new logreg(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/profile', async (req, res) => {
    try {
      const user =  await logreg.find(req.body);
      if (user[0] === undefined) {
        res.status(404).send(false);
      } else {
        res.status(200).send(user);
      }
    } catch (error) {
      res.status(500).send(error);
    }
});

app.put('/user/:id', async (req, res) => {
    try {
        const user = await logreg.findByIdAndUpdate(req.params.id, req.body);
        await user.save();
        res.send(`Successfully Updated: ${user}`);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
  
app.delete('/user/:id', async (req, res) => {
    try {
        const user = await logreg.findByIdAndDelete(req.params.id);
        if (!user) res.status(404).send('No user found');
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});  

app.get('/users', async (req, res) => {
    try {    
        const users = await logreg.find({});
        res.status(200).send(users);
    }
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = app;