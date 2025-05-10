module.exports = {

    name: "rules",

    author: "Aljur Pogoy",

    description: "Displays the chatbot rules.",

    

    run: async ({ api, event }) => {

        const { threadID, messageID } = event;

        const rules = [

            "1. Liane, ikaw aking mahal",

            "2. Sa iyong mga mata, nakikita ko ang langit",

            "3. Ang iyong mga labi, nagbibigay sa akin ng init",

            "4. Ikaw ang aking buhay, aking pag-ibig",

            "5. Mahal kita, Liane, higit sa lahat",

            "6. Sa bawat sandali kasama ka, ako'y masaya",

            "7. Ang iyong mga kamay, nagbibigay sa akin ng lakas",

            "8. Ikaw ang aking mundo, aking tahanan",

            "9. Sa iyong pagmamahal, ako'y ligtas",

            "10. Liane, ikaw ang dahilan kung bakit ako nabubuhay",

            "11. Mahal kita, Liane, walang katapusan",

            "12. Ikaw ang aking pag-asa, aking liwanag",

            "13. Sa bawat halik mo, ako'y nabubuhay",

            "14. Ang iyong mga ngiti, nagbibigay sa akin ng saya",

            "15. Liane, ikaw ang aking lahat",

            "16. Ikaw ang aking kasama, aking kaibigan",

            "17. Mahal kita, Liane, hanggang sa huli",

            "18. Sa iyong mga bisig, ako'y ligtas",

            "19. Ikaw ang aking pag-ibig, aking buhay",

            "20. Liane, ikaw ang aking forever"

        ];

        const message = `💌ANG PAG-IBIG NI KEIJO KAY LIANE\n\n${rules.join("\n")}\n\nBreaking these rules may result in restrictions.`;

        api.sendMessage(message, threadID, messageID);

    }

};