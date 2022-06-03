using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSoket.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime SendDate { get; set; }
        public bool IsDeleted { get; set; }
        public User User { get; set; }
        public Group Group { get; set; }

    }
}
