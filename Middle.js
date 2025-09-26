function enter(bowl1, bowl2, bowl3){
    if ((bowl1 > bowl2) && (bowl1 > bowl3) && (bowl2 > bowl3)){
        console.log(bowl2);
    }
        if ((bowl1 > bowl2) && (bowl1 > bowl3) && (bowl2 < bowl3)) {
        console.log(bowl3);
        }

    else {
        console.log(bowl1);
    }
}
enter (2,4,3);