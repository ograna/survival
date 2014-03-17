#pragma strict

//var rotation : Quaternion;
//var Holder : Transform;
var target : Transform;

function Awake () {
	//rotation = transform.rotation;
}

function LateUpdate () {
	var relativePos = target.position - transform.position;
	var rotation = Quaternion.LookRotation(relativePos);
	transform.rotation = rotation;
	transform.rotation.z = 68;
}