let index = {};

const ukCounties = {
    "gb-yk": "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Yorkshire.svg"
};

const usStates = {
    "us-al": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg"
};

index.getUKCountyFlagUrl = (code) => {
    return ukCounties[code];
};

index.getUSStateFlagUrl = (code) => {
    return usStates[code];
};

module.exports = index;