#pragma strict

var MaxHealth = 100;
var Health : int;

function Start() {
	Health = MaxHealth;
}

function ApplyDammage(TheDammage : int) 
{
	Health -= TheDammage;
	
	if(Health <= 0) 
	{
		Dead();	
	}
}

function Dead()
{	
	RespawnMenu.playerIsDead = true;
	Debug.Log("Player died");
	//Destroy(gameObject);
}

function RespawnStats() {
	Health = MaxHealth;
}