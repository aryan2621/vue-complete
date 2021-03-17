const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      url: "http://www.google.com",
      title: "The final Empire",
      author: "Rishabh Verma",
      age: 44,
      x: 0,
      y: 0,
      books: [
        {
          head: "patrik",
          writer: "no diea",
          isfav: true,
        },
        {
          head: "patrik",
          writer: "no diea",
          isfav: false,
        },
        {
          head: "patrik",
          writer: "no diea",
          isfav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleOver() {
      console.log("over");
    },
    handleLeave() {
      console.log("leave");
    },
    dbclicks(e) {
      console.log("double clicks ", e.type);
    },
    handleMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handleToggle(books) {
      books.isfav = !books.isfav;
    },
  },
  computed:{
      filteredBooks(){
        return this.books.filter((book)=>book.isfav)
      }
  }
});
app.mount("#app");
