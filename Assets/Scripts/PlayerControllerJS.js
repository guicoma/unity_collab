#pragma strict

var speed : float;
private var rb : Rigidbody;

function Start () {
	rb = GetComponent.<Rigidbody>();
}

function Update () {

}

function FixedUpdate () {
	var moveHorizontal = Input.GetAxis ("Horizontal");
	var moveVertical = Input.GetAxis ("Vertical");
	var movement : Vector3 = new Vector3(moveHorizontal, 0.0f, moveVertical);
	rb.AddForce(movement * speed);
}