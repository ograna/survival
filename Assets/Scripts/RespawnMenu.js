#pragma strict

var lookAround01 : MouseLook;
var lookAround02 : MouseLook;
var charController : CharacterController;

var respawnTransform : Transform;

static var playerIsDead = false;

function Start () {
	lookAround01 = gameObject.GetComponent(MouseLook);
	lookAround02 = GameObject.Find("Main Camera").GetComponent(MouseLook);
	charController = gameObject.GetComponent(CharacterController);
}

function Update () {
	
	if(playerIsDead == true) {
		lookAround01.enabled = false;
		lookAround02.enabled = false;
		charController.enabled = false;
	}
	
}

function OnGUI() {

	if(playerIsDead == true) {
	
		if(GUI.Button(Rect(Screen.width * 0.5 - 50, 200 - 20, 100, 40), "Respawn")){
			RespawnPlayer();		
		}
		
		if(GUI.Button(Rect(Screen.width * 0.5 - 50, 245 - 20, 100, 40), "Menu")){
			Debug.Log("Return to Menu");		
		}
		
	}
}

function RespawnPlayer() {

	
	
	transform.position = respawnTransform.position;
	transform.rotation = respawnTransform.rotation;
	
	lookAround01.enabled = true;
	lookAround02.enabled = true;
	charController.enabled = true;
	
	gameObject.SendMessage("RespawnStats");
	
	playerIsDead = false;
	
	Debug.Log("Player has Respawned");

}

@script RequireComponent(CharacterController)