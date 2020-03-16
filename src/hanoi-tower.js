module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = (Math.pow(2, disksNumber) - 1);
    let obj = {
        turns: turns,
        seconds: turns / (turnsSpeed / 3600),
    };
    return obj;
}