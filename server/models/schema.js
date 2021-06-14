const mongoose = require('mongoose'),
      logregSchema = new mongoose.Schema({
            f_name: {
                type: String,
                required: true
            },
            l_name: {
                type: String,
                required: true
            },
            u_name: {
                type: String,
                required: true
            },
            pwd: {
                type: String,
                required: true
            }
      });

    
module.exports = mongoose.model('logreg', logregSchema);
