<template>
  <div id="app">
    <Profile />
    <Education />
    <Skills />
  </div>
</template>

<script>
export default {
  name: 'Resume',
  components: {
    Profile: {
      template: `
        <div class="profile">
          <h2>Profile</h2>
          <p>Full Name: Tanhueco Allen Carl Martinez</p>
          <p>Contact: Cell Phone Number: 09261811700, Email: allentanhueco420@gmail.com</p>
          <p>About Me: I am a 3rd Year College student at Holy Angel University, willing to expand my knowledge to improve in the field of Information Technology and to work well with other people.</p>
        </div>
      `,
      name: 'Profile'
    },
    Education: {
      template: `
        <div class="education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Holy Angel University</strong><br />
              Bachelor of Science in Information Technology<br />
              3rd Year Student (Present)
            </li>
            <li>
              <strong>Systems Plus College Foundation</strong><br />
              Junior High School to Senior High School<br />
              Graduated in 2019
            </li>
          </ul>
        </div>
      `,
      name: 'Education'
    },
    Skills: {
      template: `
        <div class="skills">
          <h2>Skills</h2>
          <ul>
            <li><strong>Communication</strong></li>
            <li><strong>Teamwork</strong></li>
            <li><strong>Leadership</strong></li>
            <li><strong>Risk Management</strong></li>
            <li><strong>Critical Thinking</strong></li>
            <li><strong>Time Management</strong></li>
            <li><strong>Organization</strong></li>
          </ul>
        </div>
      `,
      name: 'Skills'
    }
  }
}
</script>

<style scoped>
.profile, .education, .skills {
  margin: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 24px;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}

strong {
  color: #34495e;
}
</style>
