var json = {
    title: "Mental Illness and Crisis Resources",
    showProgressBar: "bottom",
    showNavigationButtons: true,
    clearInvisibleValues: "onHidden",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "location",
                    title: "Do you live in the United States?",
                    choices: ["Yes", "No"],
                }
            ]
        }, {
            questions: [
                {
                    type: "checkbox",
                    name: "commout",
                    title: "Which medium of communication is the most helpful to you? Please check all that apply.",
                    visibileIF: "{location}='No'",
                    choicesOrder: "random",
                    choices: ["Hotlines", "Online messaging"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Who said 'Give me liberty or give me death?'",
                    choicesOrder: "random",
                    choices: ["John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "What is the Magna Carta?",
                    choicesOrder: "random",
                    choices: ["The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"]
                }
            ]
        }
    ],
    
    completedHtml: "<p> Hopefully, this guide was helpful for you. If not, this is by no means a comprehensive list. Please don’t hesitate to reach out to those around you, whether they’re loved ones or trained professionals. </p> <p> You deserve to be heard. </p>"
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
