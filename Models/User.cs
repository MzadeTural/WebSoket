using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSoket.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public bool Status { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<Message> Messages { get; set; }
        public ICollection<UserGroup> UserGroups { get; set; }
      
    }
}
