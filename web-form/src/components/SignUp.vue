<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="text" required v-model="email" />

    <label>Password</label>
    <input type="text" required v-model="password" />
<div v-if="passwordError">
{{passwordError}}
</div>



    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
    </select>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label for="">Accept terms and Conditions</label>
    </div>
    <div>
      <input type="checkbox" value="shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="yaushi" v-model="names" />
      <label>Yaushi</label>
    </div>
    <div>
      <input type="checkbox" value="rishasbh" v-model="names" />
      <label>Rishabh</label>
    </div>

    <label>Skills</label>
    <input type="text" v-model="tempSkill"  @keyup.alt="addSkill" />

    <div v-for="skill in skills" :key="skill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>
    <br />
    <button type="submit">Submit</button>
  </form>
  <p>Email={{ email }}</p>
  <p>Password={{ password }}</p>
  <p>Role={{ role }}</p>
  <p>Terms and Conditions:{{ terms }}</p>
  <p>Array :{{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill != item;
      });
    },
    handleSubmit() {
      //validate password
      this.passwordError = this.password.length > 5 ? "" : "Errrrrooorrrrr";
      console.log(this.passwordError);
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(221, 194, 194);
  text-align: left;
  padding: 40px;
  border: 2px solid black;
  border-radius: 10px;
}
label {
  color: rgb(22, 9, 9);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  color: #555;
  border: 2px solid black;

  border: none;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>
