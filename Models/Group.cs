using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSoket.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string GroupName { get; set; }
        public DateTime ModifierDate { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<Message> Messages { get; set; }
        public ICollection<UserGroup> UserGroups { get; set; }
    }
}
