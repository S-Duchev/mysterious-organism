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

let likelySurviveArray = [];

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

    willLikelySurvive() {
      let counter = 0;

      for (let i = 0; i < this.dna.length; i++) {

        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          counter++;
        }

      }
      let surviveChance = (counter / this.dna.length * 100);
      if (surviveChance >= 60) {
        likelySurviveArray.push(this.dna)
        return true;
      } else {
        return false;
      };
    },
    complementDNA() {
      let complementDNA = this.dna;
      for (i = 0; i < complementDNA.length; i++) {
        if (complementDNA[i] === 'A') {
          complementDNA[i] = 'T';
        } else if (complementDNA[i] === 'T') {
          complementDNA[i] = 'A';
        } else if (complementDNA[i] === 'C') {
          complementDNA[i] = 'G';
        } else if (complementDNA[i] === 'G') {
          complementDNA[i] = 'C';
        }
      }
      return complementDNA;
    }
  };
}
//const test1 = pAequorFactory(1, mockUpStrand());
//const test2 = pAequorFactory(2, mockUpStrand());

//console.log(likelySurviveArray);
//console.log(`${test1.dna} -- Our first DNA strand. \n`);
//console.log(`${test1.mutate()} -- Mutated DNA. \n`);
//console.log(`${test2.dna} -- Our second DNA strand.\n`);
//console.log(`Percentage in common -- ${test1.compareDNA(test2)}%`);
//console.log(`C or G bases -- ${test1.willLikelySurvive()}`);

for (let i = 1; i <= 30; i++) {
  let test = pAequorFactory(i, mockUpStrand());
  if (test.willLikelySurvive() === true) {

    //   console.log(`Test #${o} ${likelySurviveArray[0, likelySurviveArray.length -1]} will likely survive `);
  };

}
console.log(likelySurviveArray);
console.log(test1.complementDNA());