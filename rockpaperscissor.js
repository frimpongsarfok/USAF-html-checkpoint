const rockPaperScissors = (numberOfThrows) => {
    const result = [];
    const choices = ['rock', 'paper', 'scissors'];
    const recurse = (currentPlay) => {
        if (currentPlay.length === numberOfThrows) {
            result.push(currentPlay);
            return;
        }
        for (let i = 0; i < choices.length; i += 1) {
            const currentChoice = [choices[i]];
            const nextPlay = currentPlay.concat[currentChoice];
            recurse(nextPlay);
        }
    }
    recurse([]);
    return result;
}