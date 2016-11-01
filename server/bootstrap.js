import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function() {
  if (Meteor.users.find().count() != 0) return;

    Accounts.createUserWithPhone({
      phone: '+972501234567',
      profile: {
        name: 'Beth'
      }
    });

    Accounts.createUserWithPhone({
      phone: '+972501234568',
      profile: {
        name: 'Steve'
      }
    });

    Accounts.createUserWithPhone({
      phone: '+972501234569',
      profile: {
        name: 'Mike'
      }
    });
});
