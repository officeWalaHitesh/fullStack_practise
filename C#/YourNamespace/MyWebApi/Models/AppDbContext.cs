// Inside AppDbContext.cs
using Microsoft.EntityFrameworkCore;

namespace MyWebApi.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> users { get; set; } // DbSet property name matches table name
        public DbSet<Education> education { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(e => e.education)
                .WithOne(u => u.user)
                .HasForeignKey<Education>(e => e.user_id)
                // .IsRequired();
                .OnDelete(DeleteBehavior.Cascade); 
                // Or your preferred delete behavior

            // Other configurations

            base.OnModelCreating(modelBuilder);
        }


        // Other DbSet properties if needed
    }


}
