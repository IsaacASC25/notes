function enter(bowl1, bowl2, bowl3){
    if ((bowl1 >= bowl2 && bowl1 <= bowl3) || (bowl1 <= bowl2 && bowl1 >= bowl3)) {
        console.log("bowl 1 is the middle")
    }
        if ((bowl2 >= bowl1 && bowl2 <= bowl3) || (bowl2 <= bowl1 && bowl2 >= bowl3)) {
        console.log("bowl2 is the middle");
        }

        if ((bowl3 >= bowl1 && bowl3 <= bowl2) || (bowl3 <= bowl1 && bowl3 >= bowl2)) {
        console.log("bowl 3 is the middle");
    }
}
enter (2,4,3);