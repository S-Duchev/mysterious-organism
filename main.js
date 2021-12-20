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

    },
  };
}
const test1 = pAequorFactory(1,mockUpStrand());
const test2 = pAequorFactory(2,mockUpStrand());
console.log(`Our DNA is: ${test1.dna}`); //?
console.log(`Mutated DNA: ${test1.mutate()}`); //? 
console.log(`Both DNA sequences have : ${test1.mutate()}`);//?

