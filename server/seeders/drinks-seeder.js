'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {

      return queryInterface.bulkInsert('drinks', [{
        name: 'Anchor Steam',
        type: 'beer',
        price: 5,
        alcohol: 13,
        sugar: 0,
        calories: 153,
        carbs: 16,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/as-min_lhq2vd.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Heineken',
        type: 'beer',
        price: 7,
        alcohol: 13,
        sugar: 0,
        calories: 148,
        carbs: 11,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675035/he-min_vcgj6s.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Sam Adams',
        type: 'beer',
        price: 7,
        alcohol: 13,
        sugar: 0,
        calories: 150,
        carbs: 12,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458680927/sa-min_kb2y9s.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Corona Extra',
        type: 'beer',
        price: 7,
        alcohol: 13,
        sugar: 0,
        calories: 148,
        carbs: 13,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/ce-min_u7wpkq.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Corona Light',
        type: 'beer',
        price: 7,
        alcohol: 12,
        sugar: 0,
        calories: 99,
        carbs: 5,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/cl-min_uiuj8i.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Miller Lite',
        type: 'beer',
        price: 7,
        alcohol: 13,
        sugar: 1,
        calories: 110,
        carbs: 7,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675036/ml-min_opdfvp.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Budweiser',
        type: 'beer',
        price: 4,
        alcohol: 14,
        sugar: 0,
        calories: 145,
        carbs: 11,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/bud-min_btrr1h.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Bud Light',
        type: 'beer',
        price: 4,
        alcohol: 12,
        sugar: 0,
        calories: 110,
        carbs: 7,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/budl-min_1_az6xeo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Guinness',
        type: 'beer',
        price: 8,
        alcohol: 14,
        sugar: 18,
        calories: 215,
        carbs: 18,
        volume: 16,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675035/gu-min_yc0t6l.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Pinot Noir',
        type: 'wine',
        price: 11,
        alcohol: 14,
        sugar: 1,
        calories: 123,
        carbs: 3,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675037/pn-min_f7mdqy.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Merlot',
        type: 'wine',
        price: 10,
        alcohol: 14,
        sugar: 1,
        calories: 123,
        carbs: 4,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675036/mer-min_wbgkfv.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Chardonnay',
        type: 'wine',
        price: 10,
        alcohol: 13,
        sugar: 1,
        calories: 123,
        carbs: 3,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/df1u5o3g6/image/upload/v1458585303/chard_eev1ya.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Pinot Grigio',
        type: 'wine',
        price: 10,
        alcohol: 14,
        sugar: 1,
        calories: 114,
        carbs: 4,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675036/pg-min_q70jk9.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Cabernet Sauvignon',
        type: 'wine',
        price: 11,
        alcohol: 14,
        sugar: 1,
        calories: 115,
        carbs: 4,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/cab-min_1_xjzfvs.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Zinfandel',
        type: 'wine',
        price: 9,
        alcohol: 14,
        sugar: 0,
        calories: 160,
        carbs: 5,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675037/zin-min_hcokbj.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Syrah',
        type: 'wine',
        price: 13,
        alcohol: 13,
        sugar: 1,
        calories: 124,
        carbs: 4,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675037/syrah-min_tmbjz8.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Prosecco',
        type: 'wine',
        price: 9,
        alcohol: 12,
        sugar: 0,
        calories: 150,
        carbs: 12,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675037/pro-min_pm0zaa.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Champagne',
        type: 'wine',
        price: 8,
        alcohol: 8,
        sugar: 1,
        calories: 87,
        carbs: 3,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458681376/cha-min_2_g4qwv7.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Long Island Iced Tea',
        type: 'mixed',
        price: 10,
        alcohol: 21,
        sugar: 9,
        calories: 180,
        carbs: 10,
        volume: 8,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675036/lit-min_bqy5zd.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Gin & Tonic',
        type: 'mixed',
        price: 10,
        alcohol: 15,
        sugar: 15,
        calories: 171,
        carbs: 16,
        volume: 8,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/gandt-min_wt3hsn.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Mojito',
        type: 'mixed',
        price: 14,
        alcohol: 10,
        sugar: 23,
        calories: 217,
        carbs: 8,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675036/mojito-min_h0taeu.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'RedBull Vodka',
        type: 'mixed',
        price: 12,
        alcohol: 14,
        sugar: 26,
        calories: 181,
        carbs: 27,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675036/rbv-min_i17fwm.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Cosmo',
        type: 'mixed',
        price: 11,
        alcohol: 18,
        sugar: 11,
        calories: 213,
        carbs: 13,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/cos-min_yrmuhd.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Vodka Soda',
        type: 'mixed',
        price: 7,
        alcohol: 14,
        sugar: 0,
        calories: 96,
        carbs: 0,
        volume: 5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675037/vods-min_kjmiiv.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Margarita',
        type: 'mixed',
        price: 14,
        alcohol: 14,
        sugar: 16,
        calories: 280,
        carbs: 22,
        volume: 8,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458682474/marg-min_sz99si.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Moscow Mule',
        type: 'mixed',
        price: 14,
        alcohol: 12,
        sugar: 21,
        calories: 320,
        carbs: 34,
        volume: 10,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458862415/mm-min_t2m0jb.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Jack and Coke',
        type: 'mixed',
        price: 15,
        alcohol: 14,
        sugar: 32,
        calories: 255,
        carbs: 32,
        volume: 12,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675035/jandc-min_aks3aj.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Crown Royal',
        type: 'liquor',
        price: 6,
        alcohol: 14,
        sugar: 0,
        calories: 96,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675035/cr-min_nkzhke.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Captain Morgan',
        type: 'liquor',
        price: 7,
        alcohol: 9,
        sugar: 0,
        calories: 86,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675034/cm-min_ilpsza.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Admiral Nelson',
        type: 'liquor',
        price: 2,
        alcohol: 9,
        sugar: 0,
        calories: 69,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/df1u5o3g6/image/upload/v1458585301/an_x8xkcx.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Jagermeister',
        type: 'liquor',
        price: 8,
        alcohol: 8.7,
        sugar: 0,
        calories: 103,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675035/ja-min_1_utmnf1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Jose Cuervo',
        type: 'liquor',
        price: 8,
        alcohol: 13,
        sugar: 0,
        calories: 96,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675035/jc-min_jwhm1b.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Jameson',
        type: 'liquor',
        price: 8,
        alcohol: 14,
        sugar: 0,
        calories: 69,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675035/jam-min_tixsfe.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Makers Mark',
        type: 'liquor',
        price: 8,
        alcohol: 14,
        sugar: 0,
        calories: 69,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675036/mama-min_gnhkiu.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Grey Goose',
        type: 'liquor',
        price: 8,
        alcohol: 13,
        sugar: 0,
        calories: 70,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/df1u5o3g6/image/upload/v1458585306/gg_npddvg.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Jack Daniels',
        type: 'liquor',
        price: 7,
        alcohol: 14,
        sugar: 0,
        calories: 100,
        carbs: 0,
        volume: 1.5,
        imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458675035/jd-min_vzyomp.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    },

    down: function(queryInterface, Sequelize) {
      /*
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.bulkDelete('Person', null, {});
      */
    }

};

