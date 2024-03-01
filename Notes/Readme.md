1. While working Inititally on the below part :

    ![alt text](<Screenshot 2024-02-14 151129.png>)

    when I was trying to add padding directly on "HTML", "CSS" elements in below code the padding was not happening vertically (External padding to be precse) in top and bottom. It was goting into the upper DIV section
![
](<WhatsApp Image 2024-02-14 at 15.14.10.jpeg>)

    As seen in the above image. But it was working for the above image container.  It's because the elements in this container were either inline or block (span or <p>).

    ->If I change internal padding xternal padding should change
    for this to work set display as flex then it works. 
    ![alt text](<Screenshot 2024-02-14 152107.png>)
    ![alt text](<WhatsApp Image 2024-02-14 at 15.21.47.jpeg>)
    
    ->By default I guess before changes the div was "box" type so there was issue, things work differently in both cases.

2. To hide scrollbar use the below code : 

    .course-menu {
        display: flex;
        background-color: rgba(40, 42, 53);
        color: white;
        overflow-x: scroll; /* Enable horizontal scrolling */
    }
    .course-menu::-webkit-scrollbar{
        display: none;
    }

    .course-menu is the div compnent on which scroll bar is present. "-webkit-scrollbar" is like a child property for every overflow I guess. We can use this to hide.

    Result : 
        ![alt text](<Screenshot 2024-02-14 155230.png>)

    No Scrollbar but if scrolled can work
3. Always try to use Flexbox when there is a nav menu or    something like that its easier to work like that

4. Flex and Float are basically used to style things in a floating manner. I believe flex box is more useful. 
First Day Result : 
    ![alt text](<Screenshot 2024-02-14 155731.png>)

5. Faced spacing issue here because <p> tag always have some up and down margin, on thing that I have to look after for sure. If I cant find something why there is some 
inconsistent design in CSS just hover over all elemnts on by one where its happening XD.
![alt text](<WhatsApp Image 2024-02-26 at 14.03.05.jpeg>)

6. If I keep position as fixed (always use top : 10px or 10cm etc no normal values eg : 0, 10 etc), and set height : 100% then overflow-y : scroll is working.
![alt text](<Screenshot 2024-02-26 121730.png>) ![alt text](<Screenshot 2024-02-26 121644.png>) ![alt text](<Screenshot 2024-02-26 121711.png>) ![alt text](<Screenshot 2024-02-26 121725.png>)

7. One more important thing to consider, when position is kept as fixed :
                ![alt text](<Screenshot 2024-02-26 142225.png>)
                css : .fixed{
                        position : fixed;
                        top : 0px;
                        left : 0px;
                      }
    -> While working with my code the second hello is placed under first hello, so
    that means if position = "fixed" that is fixed with respect to entire user screen
    and it's indepened of normal browser html. it's with respect to user screen. We can use Z-index to show which one is on top of the other.
    ![alt text](<Screenshot 2024-02-26 124720.png>) ![alt text](<Screenshot 2024-02-26 122030.png
    >)

    -> And also if two divs above are fixed and both have same properties "top" and "left" then both will be sticked at same place.

8. I did not understand the concept where how padding is affected when flex is present and when it is not -> to be explored
![alt text](<WhatsApp Image 2024-02-26 at 14.03.06.jpeg>) ![alt text](<WhatsApp Image 2024-02-26 at 14.03.06 (1).jpeg>)
9. I have to experiment with the part where parent <-div> position is fixed and children inside it are floated.
10. FOr now I used margins and all those things
![alt text](<Screenshot 2024-02-26 142401.png>)
which doesnt look good when I zoom out or zoom in
![alt text](<Screenshot 2024-02-26 142410.png>)

Need to position content-div  relative to child nodes or child elements (course-menu-div/ top menu bar) or use positioning as fixed, but it doessnt seem right, lets explore this also. I have to improve this and do it in better way.

11. I tried adjusting margins dynamically throguh various strategies, all things failed like setting dynamically using percentages. When using percentags it is based on screen not element so failed. If I used RAW NUMBERS then also when I zoom in (Zoom ++) other elements increased in size and overcovered them. 

![alt text](<Screenshot 2024-02-28 115722.png>) ![alt text](<Screenshot 2024-02-28 115719.png>)

->Whether I use RAW NUMBERS or PERCENTAGES it is based on screen, the point of reference are screen edges. They always remain at same position whether I zoom in or not. But what I needed was point of refernece from above HTML element.
![alt text](<Screenshot 2024-02-28 130502.png>)
->To work around this I used HTML "element.getBoundingClientRect()["bottom"]" function
![alt text](<Screenshot 2024-02-28 130958.png>)

->I think percentages mainly work when a <-div> is inside another <-div> other wise no use. Try to avoid using RAW NUMBERS.

->Other way to solve this strucutring issue is to use "absolute" positioning and then based take parent/ancestor as point of refernece ->NEED TO EXPLORE THIS.

12. Next Thing to work on : in top menu section when I zoom in the right float is going down. Can I do something about is. Use flex-container and hide on overflow something like that or use one container for both left and right options like : 

                <flex_container <left_flex_contianer> <right_flex_container>>\

                or explore more 


                Check this 

                ::before
                ::after
                mobile etc
    ![alt text](<Screenshot 2024-02-28 132931-1.png>) ![alt text](<Screenshot 2024-02-28 132937-1.png>)                

    ->Auto Hide one by one when you reduce width
    ->After some min-width show new menu or other options div section need to check on this
