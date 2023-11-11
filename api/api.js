const express = require('express');
const app = express();
const mysql = require('mysql');
const { feed, notifications, userNotifications } = require('../data');
const port = 4000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'feed',
});

const feedEntity = [...feed];
const notificationsEntity = [...notifications];
const userNotificationsEntity = [...userNotifications];

setInterval(() => {
  notificationsEntity.splice(0, notificationsEntity.length);
  userNotificationsEntity.splice(0, userNotificationsEntity.length);
  notificationsEntity.concat([...notifications]);
  userNotificationsEntity.concat([...userNotifications]);
}, 60000);

//FEED
app.get('/feed', (req, res) => {
  console.log('endpoint /feed is called');
  res.send(feedEntity);
});

//NOTIFICATIONS
app.get('/notifications', (req, res) => {
  console.log('endpoint /notifications is called');
  res.send(notificationsEntity);
});

app.delete('/notifications/:id', (req, res) => {
  console.log('endpoint /notifications/:id is called');
  const { id } = req.params;
  const index = notificationsEntity.findIndex((n) => n.id === id);
  if (index > -1) {
    notificationsEntity.splice(index, 1);
    res.send({ success: true });
  } else {
    res.status(404).send({ success: false });
  }
});

app.delete('/notifications', (req, res) => {
  console.log('endpoint /notifications is called');
  notificationsEntity.splice(0, notificationsEntity.length);
  res.send({ success: true });
});

//USER NOTIFICATIONS
app.get('/user-notifications', (req, res) => {
  console.log('endpoint /user-notifications is called');
  res.send(userNotificationsEntity);
});

app.delete('/user-notifications/:id', (req, res) => {
  console.log('endpoint /user-notifications/:id is called');
  const { id } = req.params;
  const index = userNotificationsEntity.findIndex((n) => n.id === id);
  if (index > -1) {
    userNotificationsEntity.splice(index, 1);
    res.send({ success: true });
  } else {
    res.status(404).send({ success: false });
  }
});

app.delete('/user-notifications', (req, res) => {
  console.log('endpoint /user-notifications is called');
  userNotificationsEntity.splice(0, userNotificationsEntity.length);
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
