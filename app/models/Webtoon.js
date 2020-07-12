class Webtoon {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get getId() {
    return this.id;
  }
}

module.exports = Webtoon;
