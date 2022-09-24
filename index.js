let hastebin = require('hastebin');
const request = require("snekfetch");
const terminalTitle = require('node-bash-title');
const gradient = require('gradient-string');

const ps = require('prompt-sync');
const prompt = ps();

function wait(str, ms) {
    return new Promise(resolve => setTimeout(function () {onsole.log(gradient('#ff6464', '#ff264e')(str));}, ms));
}

main();
async function main()
{
    console.clear();
    terminalTitle('McpeQuery - By Zwuiix-cmd#0001');
    largeText();
    let choice = prompt(gradient('#ff6464', '#ff264e')('Enter the IP:PORT => '));
    request.get("https://api.mcsrvstat.us/1/"+choice).then(body => {
        try {
            const server = body.body;
            console.clear();
            console.log(gradient('#ff6464', '#ff264e')(resultQuery()));
            let content =
                resultQuery()+
                "\n"+choice+
                "\n\nIPv6: "+server.ip+
                "\nMotd: "+server.motd.clean+
                "\nSoftWare: "+server.software+
                "\nVersion: "+server.version+
                "\n\nPlayers: "+server.players.online+"/"+server.players.max+
                "\nList: "+server.players.list+
                "\n\nPlugin(s): "+server.plugins.names+
                "";
            hastebin.createPaste(content,{
                contentType: 'text/plain',
                server: 'https://hastebin.com/'
            }, {})
                .then(function (urlToPaste) {
                    console.log(gradient('#ff6464', '#ff264e')("\nLink of result: "+urlToPaste));
                });
            wait("Closing", 10000);
        } catch (e){
            console.log(e);
        }
    });
}
function resultQuery()
{
    return " ██████╗ ██╗   ██╗███████╗██████╗ ██╗   ██╗    ██████╗ ███████╗███████╗██╗   ██╗██╗  ████████╗\n██╔═══██╗██║   ██║██╔════╝██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔════╝██╔════╝██║   ██║██║  ╚══██╔══╝\n██║   ██║██║   ██║█████╗  ██████╔╝ ╚████╔╝     ██████╔╝█████╗  ███████╗██║   ██║██║     ██║   \n██║▄▄ ██║██║   ██║██╔══╝  ██╔══██╗  ╚██╔╝      ██╔══██╗██╔══╝  ╚════██║██║   ██║██║     ██║   \n╚██████╔╝╚██████╔╝███████╗██║  ██║   ██║       ██║  ██║███████╗███████║╚██████╔╝███████╗██║   \n ╚══▀▀═╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝   ";
}
function largeText()
{
    console.log(gradient('#ff6464', '#ff264e')('███╗   ███╗ ██████╗██████╗ ███████╗     ██████╗ ██╗   ██╗███████╗██████╗ ██╗   ██╗\n████╗ ████║██╔════╝██╔══██╗██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗╚██╗ ██╔╝\n██╔████╔██║██║     ██████╔╝█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝ ╚████╔╝ \n██║╚██╔╝██║██║     ██╔═══╝ ██╔══╝      ██║▄▄ ██║██║   ██║██╔══╝  ██╔══██╗  ╚██╔╝  \n██║ ╚═╝ ██║╚██████╗██║     ███████╗    ╚██████╔╝╚██████╔╝███████╗██║  ██║   ██║   \n╚═╝     ╚═╝ ╚═════╝╚═╝     ╚══════╝     ╚══▀▀═╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   '));
}