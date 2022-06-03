using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using WebSoket.Models;

namespace WebSoket.DAL
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext>options):base(options)
        {
             
        }
        public DbSet<Group> Groups { get; set; }
        public DbSet<User> Users{ get; set; }
        public DbSet<Message> Messages{ get; set; }
        public DbSet<UserGroup> UserGroups{ get; set; }

    }
}
