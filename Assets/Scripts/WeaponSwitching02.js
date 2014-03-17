#pragma strict

var currentWeapon = 0;
var maxWeapons = 3;
var theAnimator : Animator;

function Awake () {
	SelectWeapon(0);
}

function Update () {
	
	if(Input.GetAxis("Mouse ScrollWheel") < 0) {
		
		if(currentWeapon + 1 <= maxWeapons) {
			currentWeapon++;
		}else{
			currentWeapon = 0;
		}
		
		SelectWeapon(currentWeapon);
		
	}else if(Input.GetAxis("Mouse ScrollWheel") > 0) {
	
		if(currentWeapon - 1 <= maxWeapons) {
			currentWeapon--;
		}else{
			currentWeapon = maxWeapons;
		}
		
		SelectWeapon(currentWeapon);
	}
	
	if(currentWeapon == maxWeapons + 1) {
		currentWeapon = 0;
	}
	
	if(currentWeapon == -1) {
		currentWeapon = maxWeapons;
	}
	
	if(Input.GetKeyDown(KeyCode.Alpha1)) {
		currentWeapon = 0;
		SelectWeapon(currentWeapon);
	}
	if(Input.GetKeyDown(KeyCode.Alpha2)) {
		currentWeapon = 1;
		SelectWeapon(currentWeapon);
	}
	if(Input.GetKeyDown(KeyCode.Alpha3)) {
		currentWeapon = 2;
		SelectWeapon(currentWeapon);
	}
	if(Input.GetKeyDown(KeyCode.Alpha4)) {
		currentWeapon = 3;
		SelectWeapon(currentWeapon);
	}
	
}

function SelectWeapon(index : int) {
	
	for(var i = 0; i < transform.childCount; i++) {
		//Activate the selected weapon
		if(i == index) {
			if(transform.GetChild(i).name == "Fists") {
				theAnimator.SetBool("WeaponIsOn", false);
			}else {
				theAnimator.SetBool("WeaponIsOn", true);
				theAnimator.SetBool("Hit01", false);
				theAnimator.SetBool("Hit02", false);
			}
			transform.GetChild(i).gameObject.SetActive(true);
		}else{
			transform.GetChild(i).gameObject.SetActive(false);
		}
	}
	
}

