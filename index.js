// add solution here
function theBeatlesPlay(musicians, instruments) {
  let beatlesStrings = []

  for (var i = 0; i < musicians.length; i++) {
    beatlesStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesStrings
}

function johnLennonFacts(lennonArray) {
  let newArray = []

  for (var i = 0; i < lennonArray.length; i++) {
    newArray.push(`${lennonArray}!!!`)
  }
    return newArray
  }
