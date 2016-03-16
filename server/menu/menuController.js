var models = require('../models');
var db = require('../models/index.js');

module.exports = {

  closeTab: function (req, res) {

  },

  order: function (req, res) {
    //assigning drink order to varible
    var ord = req.body;
    console.log('orderinfo', ord);
    if (!ord.drinkType) {
      res.sendStatus(400);
    } else {
      var DK;
      var drinkPrice;
      var currentTab;
      //finding price associated with drink name in drinks table of DB
      models.drinks.findOne({
          where: { name: ord.drinkType }
        })
        .then(function (drink) {
          drinkPrice = drink.dataValues.price;
        })
        .then(function () {
          //find all user orders for drinks count
          models.orders.findAll({
              where: { username: ord.username },
              attributes: [
                [db.sequelize.fn('COUNT', db.sequelize.col('username')), 'drinkCount'],
                // [db.sequelize.fn('SUM', db.sequelize.col('currentprice')), 'userTab']
              ]
            })
            .then(function (results) {
              var userData = results[0].dataValues;
              //insert order into db
              models.orders.create({
                  username: ord.username,
                  drinktype: ord.drinkType,
                  closeout: false,
                  currentprice: drinkPrice,
                  totalprice: null,
                  drinkcount: userData.drinkCount
                })
                .then(function (userorder) {
                  console.dir("SOMETHING THIS DOES", userorder.get());
                  res.json(userorder);
                });
            });
        })
    }
  },



  orderAndCloseTab: function (req, res) {
    //assigning drink order to variable
    var ord = req.body;
    var drinkPrice;
    var currentTab;

    if (!ord.drinkType) {
      res.sendStatus(400);
    } else {

      //finding price associated with drink name in drinks table of DB
      models.drinks.findOne({
        where: { name: ord.drinkType }
      }).then(function (drink) {
        //get current drink's price
        drinkPrice = drink.dataValues.price;
      }).then(function () {
        //get drink count
        models.orders.findAll({
          where: { username: ord.username },
          attributes: [
            [db.sequelize.fn('COUNT', db.sequelize.col('username')), 'drinkCount']
          ]
        }).then(function (drinks) {
          var drinkCount = drinks[0].dataValues.drinkCount;

          //get id of user's last closeout order
          models.orders.max('id', {
            where: {
              username: ord.username,
              closeout: true
            }
          }).then(function (max) {

            if (!max) {
              max = 0;
            }
            //get current tab total
            models.orders.findAll({
              where: {
                username: ord.username,
                id: {
                  $gt: max
                }
              },
              attributes: [
                [db.sequelize.fn('SUM', db.sequelize.col('currentprice')), 'tabTotal']
              ]
            }).then(function (tabTotal) {
              console.log("USER's TAB OBJECT", tabTotal[0].dataValues);
              //submit order
              var finalTab = tabTotal[0].dataValues.tabTotal;
              if (finalTab === null) {
                finalTab = 0;
              }
              models.orders.create({
                username: ord.username,
                drinktype: ord.drinkType,
                closeout: true,
                currentprice: drinkPrice,
                totalprice: finalTab + drinkPrice,
                drinkcount: drinkCount
              })
            })
          })
        })
      })
    }
  }

};
