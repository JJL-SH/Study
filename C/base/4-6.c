#include<stdio.h>

int main() {
  int cardnum;
  char name[20];
  printf("**********************************************************\n");
  printf("********Welcome to the books management system************\n");
  printf("**********************************************************\n");
  printf("~~~~~~~~~\t\t\t\t~~~~~~~~~~~~~~\n");
  printf("Please input your card number:\n");
  scanf("%d", &cardnum);
  printf("Please input your name:\n");
  scanf("%s", name);
  printf("\nWelcome，%s！Your card number is：%d\n",name,cardnum);
  return 0;
}