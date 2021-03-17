<template>
  <header>
    <h3>My Music</h3>
  </header>
  <main>
    <section class="player">
      <h2 class="song-title">
        {{ current.title }}
        --<span>{{ current.artist }}</span>
      </h2>
      <div class="controls">
        <button class="prev" @click="prev">Prev</button>
        <button class="play" v-if="!isPlaying" @click="play">Play</button>
        <button class="pause" v-else @click="pause">Pause</button>
        <button class="next" @click="next">Next</button>
      </div>
    </section>
    <section class="playlist">
      <h3>The Playlist</h3>
      <button
        v-for="song in songs"
        :key="song.src"
        @click="play(song)"
        :class="song.src == current.src ? 'song playing' : 'song'"
      >
        {{ song.title }}-{{ song.artist }}
      </button>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: "Hey Mamma",
          artist: "Nikki Minaj",
          src: require("../assets/1st.mp3"),
        },
        {
          title: "Austronaut in the Ocean",
          artist: "Youtube",
          src: require("../assets/2nd.mp3"),
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener(
        "ended",
        function() {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #fff;
  background: #212121;
}
main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}
.song-title {
  color: #212121;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
.song-title span{
    font-weight: 400;
    font-style: italic;
}
.controls{
    justify-content: center;
    display: flex;
    padding: 30px 15px;
}
button{
    background: none;
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
}
.play{
    font-size: 20px;
    font-weight: 700;
    padding: 15px 25px;
    margin: 0px 15px;
    color: #fff;
    background: #cc2e5d;
    border-radius: 8px;
}
button:hover{
    opacity: 0.8;
}
.next, .prev{
    font-size: 16px;
    font-weight: 700;
    padding: 10px 20px;
    margin: auto;
    color: #fff;
    background: #ff5858;
    border-radius: 6px;
    height: 2rem;
    align-items: center;
}
.playlist{
padding: 0px 30px;
}
.playlist h3{
    color: #212121;
    font-size: 20px;
    font-weight: 400;
    align-items: center;
    margin-bottom: 30px;

}
.playlist .song{
    display: block;
    padding: 15px;
    font-size: 20px;
    font-weight: 700;

    width: 100%;
    cursor: pointer;
}
.playlist .song .play{
    color: #fff;
    background: linear-gradient(to top right,#cc2e5d,#ff5a5a)
    ;
}
.playlist .song:hover{
    color: #ff5858;
}
</style>
