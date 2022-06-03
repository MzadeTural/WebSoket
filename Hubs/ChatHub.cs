using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSoket.Models
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message,string groupName)
        {
            await Clients.Group(groupName).SendAsync("ReceiveMessage", user, message);
        }
        public async Task AddGroupAsync(string group)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, group);
        }
        public async Task RemoveGroupAsync(string group)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, group);
        }
    }
}
