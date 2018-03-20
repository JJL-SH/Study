#include<stdio.h>
int main(){
	float speed=40;
	float time=90;
	float oneHour=60;
	
	float lang;

	lang=time/oneHour*speed;

	printf("lang is %f mi", lang);
	return 0;

}
