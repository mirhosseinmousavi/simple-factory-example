import WoodenDoor from '../concrete/woodenDoor';
import Door from '../interface/door';

class DoorFactory{

    static makeDoor(width: number, height: number): Door{
        return new WoodenDoor(width, height);
    }

}

export default DoorFactory;