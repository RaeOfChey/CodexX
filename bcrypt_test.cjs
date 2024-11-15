console.log("Current directory:", process.cwd());
const bcrypt = require('bcrypt');
const { User } = require('./models/user.js'); // Adjust path if necessary

async function testInsertUser() {
  const password = '12345678';
  const generatedHash = await bcrypt.hash(password, 10);

  console.log("Generated hash before DB insert:", generatedHash);
  
  const user = await User.create({
    username: 'testuser',
    email: 'test@example.com',
    password: generatedHash
  });

  const retrievedUser = await User.findOne({ where: { username: 'testuser' } });
  console.log("Hash retrieved from DB after insert:", retrievedUser.password);

  const hashesMatch = generatedHash === retrievedUser.password;
  console.log("Hashes match immediately after insert:", hashesMatch);

  const isValid = await bcrypt.compare(password, retrievedUser.password);
  console.log("Password validation result:", isValid);
}

testInsertUser();