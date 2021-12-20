// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase();

      while (dna[randIndex] === newBase) {
        newBase = returnRandBase()
      }
      this.dna[randIndex] = newBase;

      return this.dna
    },

    compareDNA(pAequorDiffrent) {
      let sameBaseCount = 0;
      for (let i = 0; i < this.dna.length; i++) {

        if (this.dna[i] === pAequorDiffrent.dna[i]) {
          sameBaseCount++;
        }

      }
      let result = sameBaseCount / this.dna.length * 100;
      return result.toFixed(1);
    },
  };
}
const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());

console.log(`${test1.dna} -- Our first DNA strand. \n`);
console.log(`${test1.mutate()} -- Mutated DNA. \n`);
console.log(`${test2.dna} -- Our second DNA strand.\n`);
console.log(`Percentage in common -- ${test1.compareDNA(test2)}%`);