const core = required('actions/core') 


try { 
    const nametoGreet = core.getInput('who-to-greet')
    console.log('hello , ${nametoGreet}!')
}
catch (error) { 
    core.setFailed(error.message);
}
