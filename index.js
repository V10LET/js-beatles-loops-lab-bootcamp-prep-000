// add solution here
function theBeatlesPlay(musicians, instruments) {
  let beatlesStrings = []

  for (var i = 0; i < musicians.length; i++) {
    beatlesStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesStrings
}
