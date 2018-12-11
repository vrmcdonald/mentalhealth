Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Mental Illness and Crisis Resources",
    clearInvisibleValues: "onHidden",
    questions: [
        {
            type: "radiogroup",
            name: "location",
            title: "Do you live in the United States?",
            isRequired: true,
            choices: [
                "Yes", "No"
            ],
            colCount: 0
        }, {
            type: "checkbox",
            name: "comm",
            title: "Which medium of communication is the most helpful to you? Please check all that apply.",
            visibleIf: "{location}='Yes'",
            isRequired: true,
            choices: [
                "Hotlines", "Text messaging", "Online messaging"
            ],
            colCount: 1
        },{
            type: "html",
            name: "hotlinesonly",
            visibleIf: "{comm} contains 'Hotlines'",
            html: "<a href='https://suicidepreventionlifeline.org/talk-to-someone-now/' target='blank'>The National Suicide Hotline</a> is available 24 hours a day, 7 days a week. <ul><li>English line: <a href='tel:1-800-273-8255'><span><mark>1-800-273-8255</mark></span></a></li><li>Spanish line: <a href='tel:1-888-628-9454'><span><mark>1-888-628-9454</mark></span></a></li><li>For Deaf/Hard of Hearing: <a href='tel:1-800-799-4889'><span><mark>1-800-799-4889</mark></span></a></li></ul>",
        },{
            type: "checkbox",
            name: "hotlinesSpecial",
            title: "Several hotlines are tailored to helping specific populations. Check the boxes below for more infomation.",
            visibleIf: "{comm} contains 'Hotlines'",
            isRequired: false,
            choices: [
                "Veterans", "LGBT", "Youth", "Abuse victims"
            ],
            colCount: 1
        },{
            type: "html",
            name: "vets",
            visibleIf: "{hotlinesSpecial} contains 'Veterans'",
            html:"<p>For veterans:</p><ul><li><a href='https://suicidepreventionlifeline.org/talk-to-someone-now/' target='blank'>The National Suicide Hotline</a> offers support for veterans. <span><mark><a href='tel:1-800-273-8255'> 1-800-273-8255</a></mark></span> (press 1 after dialing)</li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "lgbt",
            visibleIf: "{hotlinesSpecial} contains 'LGBT'",
            html:"<p>For LGBT people:</p><ul><li><a href='https://www.thetrevorproject.org/get-help-now/' target='blank'>The Trevor Lifeline</a> is available 24/7 for LGBT and questioning youth under 25. <span><mark><a href='tel:1-866-488-7386'> 1-866-488-7386</a></mark></span></li><li><a href='https://www.translifeline.org/about' target='blank'>The Trans Lifeline</a> is a 24/7 hotline staffed entirely by transgender operators, ready to provide peer support to trans people in crisis in the U.S. and Canada. The hotline follows a strict policy against notifying police without a caller’s consent. <span><mark><a href='tel:1-877-565-8860'>1-877-565-8860</a></mark></span></li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "youth",
            visibleIf: "{hotlinesSpecial} contains 'Youth'",
            html:"<p>For youth:</p><ul><li><a href='https://teenlineonline.org/our-story/' target='blank'>The Teen Line</a>, based in California, is staffed by teenagers trained to talk to struggling peers. It operates every day from 6:00pm to 10:00pm PST. <span><mark><a href='tel:1-310-855-4673'> 1-310-855-4673</a></mark></span></li><li><a href='http://www.yourlifeyourvoice.org/Pages/ways-to-get-help.aspx' target='blank'>Your Life Your Voice</a>, hosted by <a href='https://www.boystown.org/hotline/Pages/default.aspx'>Boys Town</a> counselors, offers 24/7 support. English and Spanish line: <span><mark><a href='tel:1-800-448-3000​​'>1-800-448-3000</a></mark></span> TDD line: <span><mark><a href='tel:1-800-448-1833'>1-800-448-1833</a></mark></span></li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "abuse",
            visibleIf: "{hotlinesSpecial} contains 'Abuse victims' & {hotlinesSpecial} !contains 'LGBT' & {hotlinesSpecial} !contains 'Veterans' & {hotlinesSpecial} !contains 'Youth' ",
            html:"<p>Abuse:</p><ul><li> The Rape, Abuse & Incest National Network operates the <a href='https://rainn.org/about-national-sexual-assault-telephone-hotline' target='blank'>National Sexual Assault Hotline</a> with 24/7 trained support in English and Spanish. <span><mark><a href='tel:1-800-656-4673​​'>1-800-656-4673</a></mark></span></li><li><a href='https://www.thehotline.org/' target='blank'>The National Domestic Violence Hotline</a> offers 24/7 support from advocates in more than 200 languages. <span><mark><a href='tel:1−800−799−7233'> 1−800−799−7233</a></mark></span> Video phone line: <span><mark><a href='tel:1-855-812-1011'>1-855-812-1011</a></mark></span> TTY line: <span><mark><a href='tel:1−800−787−3224'>1−800−787−3224</a></mark></span></li><li> The National Domestic Violence Hotline provides 24/7 support for youth who have questions or concerns about their relationships through <a href='https://www.loveisrespect.org/about/' target='blank'>loveisrespect.org</a> <span><mark><a href='tel:1-866-331-9474'>1-866-331-9474</a></mark></span></li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "textonly",
            visibleIf: "{comm} contains 'Text messaging'",
            html: "<p><a href='https://www.crisistextline.org/texting-in/' target='blank'>The Crisis Text Line</a> offers 24/7 support for any kind of crisis. <mark>Text HOME to 741741.</mark></p>",
        },{
            type: "checkbox",
            name: "textSpecial",
            title: "Several text services are tailored to helping specific populations. Check the boxes below for more infomation.",
            visibleIf: "{comm} contains 'Text messaging'",
            isRequired: false,
            choices: [
                "Veterans", "LGBT", "Youth", "Abuse victims"
            ],
            colCount: 1
        },{
            type: "html",
            name: "vetsText",
            visibleIf: "{textSpecial} contains 'Veterans'",
            html:"<p>For veterans:</p><ul><li><a href='https://www.veteranscrisisline.net/' target='blank'>The Veterans Crisis Line</a> is available 24 hours a day, 7 days a week. <span><mark>Text 838255.</mark></span></li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "lgbtText",
            visibleIf: "{textSpecial} contains 'LGBT'",
            html:"<p>For LGBT people:</p><ul><li><a href='https://www.thetrevorproject.org/get-help-now/' target='blank'>The Trevor Lifeline</a> offers texting services Monday through Friday between 3 p.m. and 10 p.m. EST and noon to 7 p.m. PST. <span><mark>Text START to 678678.</mark></span></li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "youthText",
            visibleIf: "{textSpecial} contains 'Youth'",
            html:"<p>For youth:</p><ul><li><a href='https://teenlineonline.org/our-story/' target='blank'>The Teen Line</a>, based in California, is staffed by teenagers trained to talk to struggling peers. It operates every day from 6:00pm to 10:00pm PST. <span><mark>Text TEEN to 839863.</mark></span></li><li><a href='http://www.yourlifeyourvoice.org/Pages/ways-to-get-help.aspx' target='blank'>Your Life Your Voice</a>, hosted by <a href='https://www.boystown.org/hotline/Pages/default.aspx'>Boys Town</a> counselors, offers support to pre-teens, teenagers and young adults every day from noon to midnight CST. <span><mark>Text VOICE to 20121.</mark></span> </li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "abuseText",
            visibleIf: "{textSpecial} contains 'Abuse victims'",
            html:"<p>Abuse:</p><ul><li>The National Domestic Violence Hotline provides 24/7 support for youth who have questions or concerns about their relationships through <a href='https://www.loveisrespect.org/about/' target='blank'>loveisrespect.org.</a> <span><mark>Text LOVEIS to 22522.</mark></span></li></ul>",
            colCount: 1
        },{
            type: "checkbox",
            name: "commOut",
            title: "Which medium of communication is the most helpful to you? Please check all that apply.",
            visibleIf: "{location}='No'",
            isRequired: true,
            choices: [
                "Hotlines", "Online messaging"
            ],
            colCount: 1
        }, {
            type: "html",
            name: "hotlinesonlyOut",
            visibleIf: "{commOut} contains 'Hotlines'",
            html: "<p>For directories of suicide hotlines outside the U.S., check out:</p><ul><li><a href='https://www.befrienders.org/need-to-talk' target='blank'>Befrienders Worldwide</a></li><li><a href='http://www.suicidestop.com/call_a_hotline.html' target='blank'>Suicide Stop</a></li><li><a href='http://suicideprevention.wikia.com/wiki/International_Suicide_Prevention_Directory' target='blank'>The International Suicide Prevention Wiki</a></li><li>For Canadians: <a href='https://www.translifeline.org/hotline' target='blank'>The Trans Lifeline</a> is a 24/7 hotline staffed entirely by transgender operators, ready to provide peer support to trans people in crisis. The hotline follows a strict policy against notifying police without a caller’s consent.</li></ul>",
        }, {
            type: "html",
            name: "onlineonlyOut",
            visibleIf: "{commOut} contains 'Online messaging'",
            html: "<p>For a directory of international crisis chats, check out <a href='http://www.suicidestop.com/suicide_prevention_chat_international.html' target='blank'>Suicide Stop</a>.</p>",
        }, {
            type: "html",
            name: "onlineonly",
            visibleIf: "{comm} contains 'Online messaging'",
            html: "<ul><li>The National Suicide Hotline’s <a href='https://suicidepreventionlifeline.org/chat/' target='blank'>Lifeline Chat</a> is available 24 hours a day, 7 days a week.</li><li><a href='https://www.imalive.org/' target='blank'>IMAlive.org</a> offers an online crisis chat staffed by trained volunteers.</li><li><a href='https://www.iowacrisischat.org/' target='blank'>The Iowa Crisis Chat</a> offers support in both English and Mandarin every day between 9 a.m. and 2 a.m. central time.</li></ul>",
        },{
            type: "checkbox",
            name: "onlineSpecial",
            title: "Several online messaging services are tailored to helping specific populations. Check the boxes below for more infomation.",
            visibleIf: "{comm} contains 'Online messaging'",
            isRequired: false,
            choices: [
                "LGBT", "Youth", "Abuse victims"
            ],
            colCount: 1
        },{
            type: "html",
            name: "lgbtOnline",
            visibleIf: "{onlineSpecial} contains 'LGBT'",
            html:"<p>For LGBT people:</p><ul><li><a href='https://www.thetrevorproject.org/get-help-now/' target='blank'>The Trevor Lifeline</a> provides instant messaging with a counselor every day between 3 p.m. and 10 p.m. EST and noon to 7 p.m. PST.</li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "youthOnline",
            visibleIf: "{onlineSpecial} contains 'Youth'",
            html:"<p>For youth:</p><ul><li><a href='http://www.yourlifeyourvoice.org/Pages/ways-to-get-help.aspx' target='blank'>Your Life Your Voice</a>, hosted by <a href='https://www.boystown.org/hotline/Pages/default.aspx'>Boys Town</a> counselors, offers online support via instant messaging Sunday through Thursday, 6 p.m. to midnight CST.</li></ul>",
            colCount: 1
        },{
            type: "html",
            name: "abuseOnline",
            visibleIf: "{onlineSpecial} contains 'Abuse victims'",
            html:"<p>Abuse:</p><ul><li>The Rape, Abuse & Incest National Network operates an online version of the National Sexual Assault Hotline with 24/7 trained support in <a href='https://hotline.rainn.org/online/' target='blank'>English</a> and <a href='https://rainn.org/es' target='blank'>Spanish</a>.</li><li><a href='https://www.thehotline.org/what-is-live-chat/' target='blank'>The National Domestic Violence Hotline</a> offers 24/7 support in an online chat with advocates in English and Spanish.</li><li>The National Domestic Violence Hotline provides 24/7 support for youth who have questions or concerns about their relationships through <a href='https://www.loveisrespect.org/about/' target='blank'>loveisrespect.org</a></li></ul>",
            colCount: 1
        },
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            //.innerHTML = "result: " + JSON.stringify(result.data);//
    });

$("#surveyElement").Survey({model: survey});
