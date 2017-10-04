

function authenticate() {

  // username : password lookup table
  const passwords = {
    'dbstrat' : '7355608',
    'bstrat': 'adminlol'
  };

  // get username and password from command line
  // e.g. from "node auth.js bstrat adminlol"
  const args = process.argv.slice(2);
  let aUsername = args[0];
  let aPassword = args[1];

  // decide whether the username/password from command line are valid
  // -- this guy is legit
  if (passwords[aUsername] === aPassword) {
    console.log("Allow " + aUsername + " access!")
  }

  // -- this guy is not legit
  else {
    console.log("No! Don't allow " + aUsername + " access!")
  }
}

authenticate();
