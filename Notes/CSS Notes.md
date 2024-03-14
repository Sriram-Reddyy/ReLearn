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

13. If I set parent as flex container and use float it doesnt work. Need to check if I can do it some other way or style flex-children. 
-> Can do this using "space-between" or grid layout

14. Flex containers fits exactly on the children elemnts.
15.  ![alt text](<Screenshot 2024-03-01 145454.png>)

    aligh-items : center;

    ->This helps in aigning item in center with respect to div or flex box or any other HTML content element.\

16. ![alt text](<Screenshot 2024-03-01 160207.png>) ![alt text](<Screenshot 2024-03-01 160201.png>)

        "space-between" property sets the two flex boxes apart
            just like shown in the picture.

17. ![alt text](<Screenshot 2024-03-01 164124.png>) ![alt text](<Screenshot 2024-03-01 164115.png>)

    Using "white-space" : nowrap prevented "Get Certified" go to next page. This helps a lot.

18. ![alt text](<Screenshot 2024-03-01 165309.png>)

        window.innerWidth; window.innerHeight; 
        elemnt.offSetWidth, element.offSetLeft; -> These are some direct properties that gives me dimensions i.e endpoints but problem is they return integers
        instead of float values

19. Solved things to an extent but need to see how to auto hide things on minimizing windoes.

    ->Doesnt work through arlier approach of this : 
        ![alt text](<Screenshot 2024-03-01 183359.png>)

    Because on the left container we can't do this need to look for some other way and also make that work.
    And its also resouce intensive a lot. 
    ![alt text](<Screenshot 2024-03-01 183234.png>)
    We can see on left there is no point in checking like that
    ->What is I style flex - elements? will that work?
    
20. Need to check how to create drop box menu. These are very important. : How about uing Z-index?


21. While working on menu containers -> This is how I understood browser rendering works :

    -> First Browser renders everything on resizing, but due to overflow : hidden the flex child "Services" is hidden. But there is an intersection : 

    ![alt text](<WhatsApp Image 2024-03-02 at 13.48.49.jpeg>) 
    ![alt text](<WhatsApp Image 2024-03-02 at 13.48.50 (1).jpeg>) 
    ![alt text](<WhatsApp Image 2024-03-02 at 13.48.50.jpeg>)
    
    ![alt text](<Screenshot 2024-03-02 133855.png>)

    its because the child flex item is hidden so thats why the right element is moved to left. Even though its hidden it is still present so thats why there are property values of getBounRect(); Now I have to see how this will happen when I keep display : "hidden".

    ![alt text](<Screenshot 2024-03-02 134352.png>)
    ![alt text](<Screenshot 2024-03-02 134407.png>)

    <video controls src="WhatsApp Video 2024-03-02 at 13.55.43.mp4" title="Title"></video>

    In the above video if I see the "Services" and "Jobs" section intersect thats why the values are coming like that. Those are relative to view port. CSS doesnt hide entire thing. It only hides visibly but not like completly "MAYAM" chestadi.  

22. If I see the below pictures since "sub-menu" is inside the "a>" tag thats why it is expanding like that ![alt text](<Screenshot 2024-03-13 203252.png>) ![alt text](<Screenshot 2024-03-13 203236.png>) ![alt text](<Screenshot 2024-03-13 203245.png>)

23. One more thing, we use absolute positioning + Z-index to make drop down as shown below : 
![alt text](<Screenshot 2024-03-13 203042.png>)

By default all elements position is static we have to mention parent element "position : relative" property for it to act like an ancestor if not the below will happen : 

![alt text](<Screenshot 2024-03-13 205138.png>) ![alt text](<Screenshot 2024-03-13 203310.png>) ![alt text](<Screenshot 2024-03-13 205050.png>)


    And now I made changes like below this is the result : 

![alt text](<Screenshot 2024-03-13 210639.png>)

![alt text](<Screenshot 2024-03-13 205150.png>)

24. Its important to undstand inline vs block vs inline-block elements. For Inline and inline-block elements we can adjust height and width and next element dont start in new line. If you remember when inside element is "Inline" the outer "div" section was not expanding and padding was overflowing. But if inside element is inline-block or block the outside "div" will definitely increase height and width automatically to fill elements. Thats the difference is what I believe. Check the pictures for example

![alt text](<WhatsApp Image 2024-03-13 at 21.11.22.jpeg>) ![alt text](<WhatsApp Image 2024-03-13 at 21.11.26.jpeg>) ![alt text](<WhatsApp Image 2024-03-13 at 21.11.24 (1).jpeg>) ![alt text](<WhatsApp Image 2024-03-13 at 21.11.24.jpeg>)



If I look above, in case of "P" tag the outer "DIV" is filling it because "P" elements are of block type. In case of "a" tag it is an inline element so thats why outer "DIV" is not filling up and bcz of padding it is being overflowed. but if i keep "display : inline-block" it will not overflow, outer "DIV" will contain it. Thats the whole point.
