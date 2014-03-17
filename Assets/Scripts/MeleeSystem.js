#pragma strict

var TheDammage : int = 50;
var Distance : float;
var MaxDistance : float = 1.5;
var TheSystem : Transform;



function Update() 
{
	if(Input.GetButtonDown("Fire1")) 
	{
		//Attack animation
		animation.Play("Attack2");
		
	}
	
//	if(animation.isPlaying == false) 
//	{
//		animation.CrossFade("Idle");
//	}
//	
//	if(Input.GetKey(KeyCode.LeftShift))
//	{
//		animation.CrossFade("Sprint");
//	}
//	
//	if(Input.GetKeyUp(KeyCode.LeftShift))
//	{
//		animation.CrossFade("Idle");
//	}
}

function AttackDammage()
{
	//Attack function
		var hit : RaycastHit;
		if(Physics.Raycast (TheSystem.transform.position, TheSystem.transform.TransformDirection(Vector3.forward), hit))
		{
			Distance = hit.distance;
			if(Distance < MaxDistance) {
				hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver); 
			}
		}
}