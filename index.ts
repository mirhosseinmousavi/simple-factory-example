import DoorFactory from './factory/doorFactory';

function main(){
    const door = DoorFactory.makeDoor(29, 59);

    const width = door.getWidth();
    const height = door.getHeight();
    console.log(`width: ${width}`);
    console.log(`height: ${height}`);
}

main();