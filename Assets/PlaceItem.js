#pragma strict

var wall : Transform;

function Start () {

}

function Update () {
	
	if(Input.GetButtonDown("Fire1")) {
		PlaceItem();
	}
	

	
}

function PlaceItem() {

	var clone : Transform;
	clone = Instantiate(wall, transform.position, transform.rotation);
	Debug.Log("PlaceItem");
}