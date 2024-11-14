'use strict';


function votingProgram() {

    const numCandidates = parseInt(prompt("Enter the number of candidates:"), 10);

    let candidates = [];
    for (let i = 0; i < numCandidates; i++) {
        const name = prompt(`Enter the name of candidate ${i + 1}:`);
        candidates.push({
            name: name,
            votes: 0,
        });
    }

    const numVoters = parseInt(prompt("Enter the number of voters:"), 10);

    for (let i = 0; i < numVoters; i++) {
        const vote = prompt(`Voter ${i + 1}, who will you vote for? (Enter candidate name or leave empty for no vote)`);

        if (vote) {
            const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
            if (candidate) {
                candidate.votes++;
            } else {
                console.log(`${vote} is not a valid candidate.`);
            }
        }
    }


    candidates.sort((a, b) => b.votes - a.votes);

    const winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

    console.log("Results:");
    for (let i = 0; i < candidates.length; i++) {
        console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
    }
}

votingProgram();