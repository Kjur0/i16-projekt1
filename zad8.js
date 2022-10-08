for (let i = 1000; true; i--) {
    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
        console.log(i);
        break;
    }
}