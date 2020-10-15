function skaititCh(str, c) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === c) count++;
    }
    return count;
  }

  function countBs(st) {
    return skaititCh(st, 'B'); //counts B
  }

  console.log(countBs('BBBBBAAAABB'));
  console.log(skaititCh('kakkerlak', 'k'));

