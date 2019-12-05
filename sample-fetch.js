function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sampleFetch(confirmationName) {
  await timeout(900);

  if (confirmationName === 'paradigma') return true;
  else return false;
}

export default sampleFetch;
